import styled from 'styled-components/native';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  fontFamily?: string;
}

export const ProductsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 40px;
`;

export const ProductCard = styled.View`
  width: 150px;
  background-color: #eaeaea;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProductDescription = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const ProductButton = styled.TouchableOpacity`
  width: ${(props: ButtonProps) => (props.width ? props.width : 80)}px;
  height: ${(props: ButtonProps) => (props.height ? props.height : 40)}px;
  background-color: ${(props: ButtonProps) => (props.backgroundColor ? props.backgroundColor : '#3a3a4c')};
  border-radius: ${(props: ButtonProps) => (props.borderRadius ? props.borderRadius : 8)}px;
  margin-top: ${(props: ButtonProps) => (props.marginTop ? props.marginTop : 0)}px;
  justify-content: center;
  align-items: center;
`;