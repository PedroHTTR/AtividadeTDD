test('Verificar se a senha possui pelo menos 8 caracteres', () => {
    // Arrange
    const senha = '1234567';
    // Act
    const resultado = validarSenha(senha);
    // Assert
    expect(resultado).toBe(false);
});

test('Verificar se a senha possui pelo menos uma letra maiúscula', () => {
    // Arrange
    const senha = '12345678';
    // Act
    const resultado = validarSenha(senha);
    // Assert
    expect(resultado).toBe(false);
});

test('Verificar se a senha possui pelo menos uma letra minuscula', () => {
    // Arrange
    const senha = '12345678A';
    // Act
    const resultado = validarSenha(senha);
    // Assert
    expect(resultado).toBe(false);
});