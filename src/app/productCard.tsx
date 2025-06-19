import { useLocalSearchParams } from 'expo-router';
import { Container, HeaderCard, ImageCard, CardText, CardInfo, ButtonsHome, BottomContainer, RowBetween } from '../styles/cardStyles';
import { GetStartedButton } from '../components/button';
import {Products} from '../data/Products';
import { router } from 'expo-router';
import { ProductButton } from '../styles/ProductsStyles';
import { MaterialIcons } from '@expo/vector-icons';

const ProductCard = () => {
  const { id } = useLocalSearchParams();
  const product = Products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <CardText fontSize={18} fontFamily="Inter-Bold">
          Produto não encontrado.
        </CardText>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderCard>
        <ImageCard source={product.image} />
        
      </HeaderCard>

      <CardInfo>
        <ProductButton onPress={() => router.back()} width={40}><MaterialIcons name="home" size={18} color="white" /></ProductButton>
        <CardText fontSize={24} color="#3a3a4c" marginBottom={30} marginTop={10} fontFamily="Inter-SemiBold">
          {product.name}
        </CardText>
        <CardText fontFamily="Inter-Regular" fontSize={14} color="#808080" marginBottom={30}>
          Produto de alta qualidade, com garantia estendida e suporte AppleCare.
        </CardText>
        
      </CardInfo>

      <CardText fontFamily='Inter-Regular' fontSize={20} color='#808080'>
        Status: {product.inStock ? 'Disponível' : 'Indisponível'}
      </CardText>
    
      <BottomContainer>
        <ButtonsHome>
        
        </ButtonsHome>

        <ButtonsHome>
  <RowBetween>
    <CardText fontSize={34} color="#3a3a4c" fontFamily="Inter-SemiBold">
      ${product.price}
    </CardText>
    <ProductButton>
      <MaterialIcons name="shopping-cart" size={20} color="white" />
    </ProductButton>
  </RowBetween>
</ButtonsHome>
      </BottomContainer>
    </Container>
  );
};

export default ProductCard;