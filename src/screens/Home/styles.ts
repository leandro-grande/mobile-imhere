import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: #131016;
`;

export const EventTitle = styled.Text`
  margin-top: 48px;
  color: #FDFCFE;
  font-size: 24px;
  font-weight: bold;
`;

export const EventDate = styled.Text `
  color: #6B6B6B;
  font-size: 16px;
`;

export const EventForm = styled.View`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 42px;
  flex-direction: row;
 
`;

export const EventInput = styled.TextInput`
  flex: 1;  
  padding: 16px;
  height: 56px;
  color: #FDFCFE;
  background-color: #1F1E25;
  border-radius: 6px;
  font-size: 16px;
  margin-right: 12px;
`;

export const EventButton = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  background-color: #31cf67;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
  margin-left: auto;
  
`;

export const EventButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  font-size: 18px;
  color: #9a9a9a;
`;

export const EmptyListText = styled.Text`
  font-size: 18px;
  color: #ddd;
`