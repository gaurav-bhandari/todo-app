type Fonts = {
  light: FontObj;
  regular: FontObj;
  medium: FontObj;
  semiBold: FontObj;
  bold: FontObj;
};

type FontObj = {
  fontFamily: string;
};

export const fonts: Fonts = {
  light: {
    fontFamily: 'Poppins-Light', // 300 or lower
  },
  regular: {
    fontFamily: 'Poppins-Regular', // 400
  },
  medium: {
    fontFamily: 'Poppins-Medium', // 500
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold', // 600
  },
  bold: {
    fontFamily: 'Poppins-Bold', // 700 or above
  },
};
