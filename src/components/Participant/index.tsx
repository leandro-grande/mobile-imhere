import { ParticipantContainer, ParticipantName, ParticipantRemoveButton, ParticipantRemoveButtonText } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: () => void;
}

export const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <ParticipantContainer>
      <ParticipantName>
         {name}
      </ParticipantName>

      <ParticipantRemoveButton onPress={onRemove}>
        <ParticipantRemoveButtonText>
          -
        </ParticipantRemoveButtonText>
      </ParticipantRemoveButton>
    </ParticipantContainer>
  )
}