import { connect } from 'react-redux';

// export const mapStateToProps = (state) => ({
//   name: state.name,
//   image: state.image,
//   title: state.title,
//   platform: state.platform,
//   description: state.description,
//   isActive: state.isActive,
// });

// Ожидаемая форма с бека(Это все доступные игры, созданнные админом(админ сам заполняет инфу по форме))
export const mapStateToPropsGames = () => ({
  id: '1',
  name: 'Pathfinder',
  image:
    'https://shop.buka.ru/data/img_files/4644/additional750x580/v99RYC2jx2_719x0.jpg',
  title: 'Супер новая настолка ин зэ ворлд',
  platform: 'Онлайн',
  description: 'Разваливай кабинеты соперникам, так как это делал твой батя.',
  isActive: true,
});
