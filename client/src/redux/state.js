export const initialState = {
  user: {
    value: null,
    error: null,
  },
  validation: {
    error: null,
    value: false,
    /*   
    number: null //Насколько я понял это код с каптчей,
    @Максим ты делаешь авторизацию, если что-то сломается 
    то я ей выпилил. Будет понятно где начинать дебаггинг*/
  }
}
