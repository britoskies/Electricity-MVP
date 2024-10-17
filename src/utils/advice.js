export const getDefaultRecommendations = (device) => {
    const defaultAdvice = `Utiliza dispositivos de bajo consumo energético, apaga los electrodomésticos cuando no estén en uso y ajusta el aire acondicionado a una temperatura moderada.`;
    const ACAdvice = `Ajusta el termostato a una temperatura moderada (alrededor de 24-26°C) y usa el modo de ahorro de energía. Mantén los filtros limpios y asegúrate de que las ventanas y puertas estén bien cerradas para evitar la fuga de aire frío.`
    const fridgeAdvice = `Mantén la temperatura de la nevera entre 3-5°C y el congelador a -18°C. Evita abrir la puerta frecuentemente y asegúrate de que el sellado esté en buen estado para prevenir escapes de aire frío.`
    const TVAdvice = `Apaga el televisor completamente cuando no lo estés usando en lugar de dejarlo en modo de espera. Ajusta el brillo a niveles moderados y usa un temporizador para apagarlo automáticamente si tiendes a quedarte dormido viéndolo.`
    const washingMachineAdvice = `Utiliza la lavadora con cargas completas y en ciclos de agua fría cuando sea posible. Evita el uso de la secadora y deja que la ropa se seque al aire libre cuando el clima lo permita.`

    switch (device) {
        case "Aire Acondicionado":
            return ACAdvice;
        case "TV":
            return TVAdvice;
        case "Nevera":
            return fridgeAdvice;
        case "Lavadora":
            return washingMachineAdvice;
        default:
            return defaultAdvice;
    }
} 