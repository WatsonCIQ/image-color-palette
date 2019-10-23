import * as React from "react";
import { render } from "react-dom";
import palette from "image-palette";
import pixels from "image-pixels";
import "./styles.css";

const { useState, useEffect } = React;

function App() {
  const [imagePalette, setImagePalette] = useState([]);

  useEffect(() => {
    const res = async () =>
      palette(
        await pixels(
          "https://yt3.ggpht.com/a/AGF-l7_7OUN-0YKH8KXVN5HSdY3n7kxlrkW0YjLObA=s288-c-k-c0xffffffff-no-rj-mo"
        )
      ).colors;
    res().then(colors => setImagePalette(colors));
  }, []);
  console.log(imagePalette);
  return (
    <div className="App">
      {imagePalette.map(colors => {
        console.log(colors);
        return (
          <p
            style={{
              width: 100,
              backgroundColor: `rgba(${colors[0]}, ${colors[1]}, ${
                colors[2]
              }, ${colors[3]})`,
              height: 100
            }}
          />
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
