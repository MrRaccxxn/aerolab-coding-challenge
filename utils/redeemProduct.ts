import Moralis from "moralis/types";
import { addToast } from "../src/redux/actions/toast/toast.action";
import { ToastEnum } from "../src/types/Toast.types";

export const buyProduct = async function (
  id: number,
  productName: string,
  price: number,
  Moralis: Moralis,
  contractProcessor: any,
  dispatch: any
) {
  let options = {
    contractAddress: "0xC287F3212000ce0eA682aF4127AA600137194eD5",
    functionName: "buyProduct",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "buyProduct",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    params: {
      id: id,
    },
    msgValue: Moralis.Units.ETH(price),
  };

  await contractProcessor.fetch({
    params: options,
    onSuccess: () => {
      handleSuccess(dispatch, productName);
    },
    onError: () => {
      handleError(dispatch, productName);
    },
  });
};

const handleSuccess = (dispatch: any, productName: string) => {
  addToast(productName, ToastEnum.succcess);
};

const handleError = (dispatch: any, productName: string) => {
  addToast(productName, ToastEnum.error);
};
