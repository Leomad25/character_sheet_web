const SUCCESS_DEFFAULT_MESSAGE = 'success'
const ERROR_DEFFAULT_MESSAGE = 'error';

interface GeneralResponsiveInterface {
  code: number;
  message: string;
  data: any;
}

const GeneralResponsive: ( data: any ) => GeneralResponsiveInterface = (data: any) => {
  return {
    code: 0,
    message: SUCCESS_DEFFAULT_MESSAGE,
    data,
  };
}

const GeneralResponsiveError: (message?: string) => GeneralResponsiveInterface = (message: string = ERROR_DEFFAULT_MESSAGE) => {
  return {
    code: -1,
    message,
    data: null,
  };
}

export {
  GeneralResponsive,
  GeneralResponsiveError,
  GeneralResponsiveInterface,
};