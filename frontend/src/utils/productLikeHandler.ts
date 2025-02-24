export const handleLikeClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Чтобы не срабатывал клик по карточке
    console.log(`Лайк на товаре с id: ${id}`);
  
    // Тут можно добавить изменение состояния или отправку на сервер
};