import { create, MMKVLoader } from "react-native-mmkv-storage";

export interface ApplicationQrParams {
  email: string;
  issuer: string;
  secret: string;
}

export interface ApplicationParams extends ApplicationQrParams {
  title: string;
}

const applicationsStorage = new MMKVLoader()
  .withInstanceID("applications")
  .withEncryption()
  .initialize();

const useApplicationsStorage = create(applicationsStorage);

export const useStorageApplicationsList = () =>
  useApplicationsStorage<ApplicationParams[]>("applicationParamsList", []);
