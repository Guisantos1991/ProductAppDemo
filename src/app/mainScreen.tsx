import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import {
  MainContainer,
  MainHeader,
  Header,
  HeaderTitle,
  ProfileImage,
  MidText,
  CategoryContainer,
  CategoryButton,
  ButtonText
} from '../styles/MainStyles';

import { GetStartedButton } from '../components/button';
import { router } from 'expo-router';
import SearchBar from '../components/searchBar';
import {Products} from '../data/Products';

import {
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductButton
} from '../styles/ProductsStyles';

import { MaterialIcons } from '@expo/vector-icons';

const MainScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = Products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category?.toLowerCase() === selectedCategory
      );
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleProductClick = (productId: number) => {
    router.push({
      pathname: '/productCard',
      params: { id: productId.toString() }
    });
  };

  return (
    <MainContainer>
      <MainHeader>
        <Header>
          <HeaderTitle>Guilherme Santos</HeaderTitle>
          <ProfileImage source={require('../../assets/images/profile-1.jpg')} />
        </Header>
      </MainHeader>

      <SearchBar onSearch={setSearchTerm} />
      <MidText>The Best Products!</MidText>

      <CategoryContainer>
        {['All', 'Headphones', 'Smartphone', 'Notebook', 'Watches'].map((category) => {
          const isSelected = selectedCategory === category.toLowerCase();
          return (
            <CategoryButton
              key={category}
              onPress={() => handleCategoryPress(category)}
              style={{
                backgroundColor: isSelected ? '#3a3a4c' : '#e3e3e3'
              }}
            >
              <ButtonText style={{ color: isSelected ? '#fff' : '#000' }}>
                {category}
              </ButtonText>
            </CategoryButton>
          );
        })}
      </CategoryContainer>

      <ScrollView>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <TouchableOpacity key={product.id} onPress={() => handleProductClick(product.id)}>
              <ProductCard>
                <ProductImage source={product.image} />
                <ProductName>{product.name}</ProductName>
                <ProductDescription>
                  <ProductPrice>{`$${product.price}`}</ProductPrice>
                  <ProductButton>
                    <MaterialIcons name="add-shopping-cart" size={20} color="white" />
                  </ProductButton>
                </ProductDescription>
              </ProductCard>
            </TouchableOpacity>
          ))}
        </ProductsContainer>
      </ScrollView>

      <GetStartedButton
        style={{ width: 200 }}
        title="Go to Home"
        onPress={router.back}
      />
    </MainContainer>
  );
};

export default MainScreen;