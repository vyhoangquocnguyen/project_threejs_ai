/* eslint-disable no-unused-vars */
import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#efed44",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
