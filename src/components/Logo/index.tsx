import * as React from "react";
import {makeStyles} from "@material-ui/core";

interface Props {
    alt: string;
}

export const Logo : React.FunctionComponent<Props> = ({ alt, ...otherProps }) => {

  const styles = {
    root: {
      minHeight: 40,
      maxHeight: 70,
      minWidth: 70,
    },
    "svgClass1": { fill: "#b30000" },
    "svgClass2": { fill: "#3c3623" }
  };
  const useStyles = makeStyles(styles, { name: "Logo" });

  const { svgClass1, svgClass2, root } = useStyles();

  return (
    <svg
      id="Camada_1"
      className={root}
      data-name="Camada 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 93"
      {...otherProps}
    >
      <title>{alt}</title>
      <path className={svgClass1}
        d="M86.88,16.74l2.46-1.47c.54-.33,1-.3,1.3.32a1.45,1.45,0,0,0,1,.9c.37.1.67.53,1,.85s.53.43.9.14a5.08,5.08,0,0,1,.75-.44c.81-.46,1.28-.18,1.28.75a4.61,4.61,0,0,0,.65,2.79c.68-.39,1,.06,1.34.57.24.35.65.59.89.94a14.22,14.22,0,0,1,.76,1.45c1-.18,1-.09,1.3.93s.84,1.86,1.19,2.82a5.53,5.53,0,0,1,.13,1.42c.88-.12,1.21.2,1,1.22a1.73,1.73,0,0,0,.22,1.43c.15.22.06.6.11.91s.19.72.23,1.09a1.87,1.87,0,0,1-.06.82c-.2.5-.46,1-.7,1.43-.45.85-.26,1.34.58,1.9a1,1,0,0,1,.32.84c-.2,1.26-.48,2.5-.72,3.76a.48.48,0,0,0,.07.38c.46.43.27.81,0,1.2l-1.11,1.42c.7.47.77.76.23,1.36-.91,1-1.88,2-2.81,3a2.35,2.35,0,0,0-.42.78A2.5,2.5,0,0,1,97,51.33c-.54-.11-.67-.69-.23-1.19.68-.78,1.4-1.52,2.14-2.31A1,1,0,0,1,99,46.46a5.37,5.37,0,0,1,.63-.78,6.67,6.67,0,0,0,2-4.2,21.73,21.73,0,0,0,.45-2.64,2.24,2.24,0,0,0-.89-1.44c-.45-.37-.55-.67-.3-1.15.15-.28.27-.58.43-.84a3.65,3.65,0,0,0,.31-3.48,5.07,5.07,0,0,1,0-1.52,4.44,4.44,0,0,1-.74.34c-.21,0-.52.09-.65,0a1,1,0,0,1-.25-.67,1.9,1.9,0,0,1,.19-.77,2.62,2.62,0,0,0-.5-2.72,4.78,4.78,0,0,1-.43-1.41c-.64.2-.88-.2-1.16-.75A25.78,25.78,0,0,0,96.54,22c-1.19.24-1.19.24-1.57-.9,0-.11,0-.29-.13-.33-.89-.51-.53-1.39-.63-2.13-.06,0-.11-.06-.14,0-1.37.61-1.36.6-2.45-.45-.16-.15-.44-.16-.64-.27a2.1,2.1,0,0,1-.68-.44,6.53,6.53,0,0,1-.58-.94l-2.28,1.32c-.86.5-1.16.47-1.48-.43a1.93,1.93,0,0,0-2.12-1.36c-1.74-.06-3.49.3-5.23-.12a1.19,1.19,0,0,0-.73.2c-4.23,2.2-7.91,5.22-11.72,8.06a2.17,2.17,0,0,0-.4.56c-.17.28-.33.58-.51.86C64.4,27,63.54,28.47,62.8,30a2,2,0,0,1,.43-.15c.24,0,.58,0,.7.1a1.06,1.06,0,0,1,.12.77,3.67,3.67,0,0,1-.38.77l-1.35,3c.52.1,1,.05,1.15.25a1.78,1.78,0,0,1,.11,1.09c0,.48-.34,1,.21,1.39.12.09,0,.6-.11.85-.31.6-.69,1.17-.94,1.59A9.45,9.45,0,0,1,63,41.13a6.41,6.41,0,0,0,.81,3.11c.43.76.7,1.6,1.08,2.38.17.33.47.58.63.91a1.75,1.75,0,0,1,.2.86,9.72,9.72,0,0,1-.26,1.34c.75.26,1.49.48,2.2.78a1.27,1.27,0,0,1,.62.63,3.3,3.3,0,0,1,.08,1c1-.06,1-.06,1.34,2.14,1.58-.39,3.26.22,4.81-.62.52-.29,1.08,0,1,.58-.23,1.36.72,1.91,1.51,2.63.61-.36,1.21-.69,1.79-1.07s.87-.33,1.2.13a2,2,0,0,0,2,.83c.69-.08,1.39.05,2.08,0s1.09-.25,1.64-.3a3,3,0,0,1,.88.16c-.07.29,0,.75-.22.84a4.32,4.32,0,0,1-1.64.56c-1,.08-1.91,0-2.87,0a.22.22,0,0,0-.14,0c-1.1.67-1.64-.18-2.26-.83a3,3,0,0,0-.24-.18c-.61.35-1.22.68-1.8,1a.86.86,0,0,1-1.16-.12c-.5-.43-.85-1.12-1.68-1.11-.11,0-.29-.39-.34-.63a4.88,4.88,0,0,1,0-1c-1.65.1-3.22.16-4.78.31-.72.07-.9,0-1-.69,0-.33-.09-.67-.14-1-1.11.25-1.26.13-1.25-1,0-.57.12-1.17-.66-1.38-.51-.12-.9-.6-1.54-.25-.44.25-.79,0-.82-.56a3,3,0,0,1,.15-.92A2.44,2.44,0,0,0,63.38,47a.4.4,0,0,1-.13-.18c-.36-1-.72-2-1.07-3-.23-.65-.42-1.3-.65-2a.24.24,0,0,1-.2,0c-.25,0-.6,0-.7-.19a1,1,0,0,1,0-.79,3.85,3.85,0,0,1,.59-1.07,5,5,0,0,0,.93-3.23s-.08-.06-.12,0c-.33,0-.85.17-1,0a1.83,1.83,0,0,1-.12-1.06,9.06,9.06,0,0,1,.17-1.73,10.31,10.31,0,0,1,.62-1.46s-.06-.06-.09,0c-.38.13-.76.55-1.17.1s0-.9.18-1.31a15.48,15.48,0,0,0,.94-1.62,10.93,10.93,0,0,1,1.66-3.13.4.4,0,0,0,0-.37c-.4-.54-.13-.93.27-1.24,1.64-1.25,3.3-2.48,4.94-3.72.19-.14.36-.31.55-.48-.25-.43-.39-.84.19-1.18,1.53-.89,3-1.87,4.59-2.68,1.36-.7,2.82-1.16,4.17-1.92.55-.32,1.48.08,2.24.1.56,0,1.11-.13,1.66-.13s1.38.07,2.07.11l.14,0C85.39,14.81,86.67,14.92,86.88,16.74Z"/>
      <path className={svgClass2}
        d="M71.64,57.71l4.61.06L73,64.5h0l8.06-6.66,3.48,0L72.79,67.5l-4.59-.07,3.21-6.72h0l-8,6.65-3.48,0Z"/>
      <path className={svgClass2}
        d="M61.86,36.1C59.22,48.87,56.11,58.25,41.5,58.25c-9,0-16.11-3.23-16.11-12.66A35.17,35.17,0,0,1,26.25,38L30.8,17.4h0A8.81,8.81,0,0,1,39.41,28L36.84,40.12a27.93,27.93,0,0,0-.75,4.38c0,3.28,1.9,5.81,5.7,5.81,6.9,0,8-8.29,9.37-14.73l4-18.18h0A8.65,8.65,0,0,1,63.6,27.82Z"/>
      <path className={svgClass2}
        d="M139.77,37.69c-2.44,12.81-5.39,22.24-20,22.48-9,.14-16.16-3-16.32-12.4a35.15,35.15,0,0,1,.74-7.6L108.4,19.5h0A8.8,8.8,0,0,1,117.18,30l-2.37,12.13a28.51,28.51,0,0,0-.68,4.39c.06,3.27,2,5.77,5.79,5.71,6.91-.11,7.86-8.41,9.14-14.88l3.67-18.24h0a8.64,8.64,0,0,1,8.63,10.28Z"/>
      <path className={svgClass2}
        d="M26.1,63.14c-2.1,1.7-3.67,3.07-6.53,3.56a15.82,15.82,0,0,1-2.58.14,9.37,9.37,0,0,1-2.4-.36l2.66-2.07a3.7,3.7,0,0,0,1.44.27c1.9,0,3.4-1.35,4.6-2.33l6.46-5.26,3.74,0Z"/>
      <path className={svgClass2}
        d="M33.34,67.08c-4.49-.06-4.35-2-2.54-4a18.24,18.24,0,0,1,13.61-5.94c4.49.07,4.35,2,2.53,4A18.2,18.2,0,0,1,33.34,67.08Zm9.08-8c-2.85,0-6.14,2.25-7.64,3.88-1.11,1.21-1.38,2.23.54,2.26,2.85,0,6.15-2.25,7.63-3.86C44.06,60.1,44.34,59.07,42.42,59Z"/>
      <path className={svgClass2}
        d="M56.07,57.48l4.41.06c2.62.05,5.73.16,3.55,2.55-1.56,1.7-4,2.26-6.28,2.41l0,0c1,.08.45,1.11.07,1.74l-1.72,3-3.68,0,1.53-2.47c.8-1.27.77-1.36-.89-1.39h-.4L48,67.13l-3.7,0Zm-1.24,4,1.25,0c1.6,0,3.1-.24,3.94-1.15.63-.69.3-1-.79-1l-1.76,0Z"/>
      <path className={svgClass2}
        d="M93.6,58l4.63.07-6.57,9.68-3.72-.06,1.51-2.06-5.36-.08-3.53,2-4-.06Zm0,2h0L87.2,63.78l3.56,0Z"/>
      <path className={svgClass2}
        d="M107.2,58.23l4.79.07c4.39.07,5.85,1.41,3.5,4a18.39,18.39,0,0,1-14.09,5.64l-6-.08ZM101.5,66l1.62,0a11.66,11.66,0,0,0,8.41-3.62c1.61-1.77.21-2.17-2-2.2h-.91Z"/>
      <path className={svgClass2}
        d="M129.14,58.56l4.63.07-6.57,9.68-3.72-.06L125,66.19l-5.36-.08-3.53,2-4-.06Zm0,2h0l-6.38,3.73,3.56.06Z"/>
      <polyline className={svgClass2}
        points="65.27 62.91 71.56 57.62 76.55 57.62 74.21 61.94 70.15 63.35 71.87 60.42 68.19 63.35"/>
    </svg>
  );
};