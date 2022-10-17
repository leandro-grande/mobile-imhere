import styled from "styled-components/native";


export const ParticipantContainer = styled.View`
  margin-bottom: 10px;
  width: 100%;
  background-color: #1f1e25;
  border-radius: 5px;
  

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ParticipantName = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  color: #fff;
`;

export const ParticipantRemoveButton = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  background-color: #e23c44;
  border-radius: 5px;

  align-items: center;
  justify-content: center;  
`;

export const ParticipantRemoveButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;