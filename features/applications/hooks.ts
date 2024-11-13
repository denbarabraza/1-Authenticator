import { ApplicationParams, useStorageApplicationsList } from "./storage";

export const useAccounts = () => {
  const [accountParamsList, setAccountParamsList] =
    useStorageApplicationsList();

  const addAccount = ({ email, issuer, secret, title }: ApplicationParams) => {
    const isExists = accountParamsList.find((item) => item.title === title);

    if (isExists) {
      throw new Error("Account already exists");
    }

    setAccountParamsList([]);
  };

  const removeAccount = (title: string) => {
    setAccountParamsList((prev) => prev.filter((item) => item.title !== title));
  };

  return { accountParamsList, addAccount, removeAccount };
};
