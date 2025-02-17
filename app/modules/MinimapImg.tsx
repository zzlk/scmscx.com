import { createResource, createSignal } from "solid-js";

import style from "./MinimapImg.module.scss";

export default function (props: any) {
  const [width, setWidth] = createSignal("");
  const [height, setHeight] = createSignal("");

  const onLoad = (evt: any) => {
    const naturalWidth = evt.target.naturalWidth;
    const naturalHeight = evt.target.naturalHeight;
    const scalingFactor = Math.min(
      props["max-width"] / naturalWidth,
      props["max-height"] / naturalHeight
    );

    setWidth(`${naturalWidth * scalingFactor}px`);
    setHeight(`${naturalHeight * scalingFactor}px`);
  };

  return (
    <img
      class={style.minimap}
      src={`/api/uiv2/minimap/${props.mapId}`}
      onLoad={onLoad}
      style={{ width: width(), "max-height": height() }}
    />
  );
}
