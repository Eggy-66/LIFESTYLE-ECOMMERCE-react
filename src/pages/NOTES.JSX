return (
    <Container>
      {/* Your cart JSX */}
      {/* ... */}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          {/* ... */}
        </Top>
        <Bottom>
          <Info>
            {PRODUCTS.map(product => (
              <Product key={product.id}>
                <ProductDetail>
                  <Image src={product.productImage} alt={product.productName} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.productName}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product.id}
                    </ProductId>
                    {/* Add other details like size, color, etc. if available */}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => removeFromCart(product.id)} />
                    <ProductAmount>
                      {
                        cartItems.find(item => item.id === product.id)?.quantity || 0
                      }
                    </ProductAmount>
                    <Add onClick={() => addToCart(product.id)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * (
                      cartItems.find(item => item.id === product.id)?.quantity || 0
                    )}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          {/* Summary */}
          {/* ... */}
        </Bottom>
      </Wrapper>
      {/* Footer */}
      {/* ... */}
    </Container>
  );
};

export default Cart;