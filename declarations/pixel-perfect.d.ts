declare module "react-native-pixel-perfect" {
  export declare function create(designResolution: {
    height: number;
    width: number;
  }): (pixelValue: number) => number;
}
