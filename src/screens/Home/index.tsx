import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import {
  Container,
  EmptyListText,
  EventButton,
  EventButtonText,
  EventDate,
  EventForm,
  EventInput,
  EventTitle,
  Title
} from "./styles";

export const Home = () => {
  const [participantName, setParticipantName] = useState('')
  const [participants, setParticipants] = useState<string[]>([]);

  const handleParticipantRemove = (name: string) => {
    setParticipants(prevState => prevState.filter(participant => participant !== name));
  }

  const handleParticipantAdd = () => {
    if (!participantName) {
      return;
    }

    if (participants.includes(participantName)) {
      return
    }
    
    setParticipants(prevState => [...prevState, participantName] )
    setParticipantName('');
  }

  return (
    <Container>
      <EventTitle>Nome do Evento</EventTitle>
      <EventDate>Sexta, 04 de Novembro de 2022</EventDate>
      
      <EventForm>
        <EventInput 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <EventButton onPress={handleParticipantAdd}>
          <EventButtonText>+</EventButtonText>
        </EventButton>
      </EventForm>

      {participants.length > 0 && (
        <Title>Lista de Participantes</Title>
      )}

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item} 
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyListText>A lista de participantes está vazia.</EmptyListText>
        )}
      />
    </Container>
  );
}