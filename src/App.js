import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

import theHandyBag from "./assets/bag_1.png";
import theStylishBag from "./assets/bag_2.png";
import theSimpleBag from "./assets/bag_3.png";
import theTrendyBag from "./assets/bag_4.png";
import brandImage from "./assets/brand.png";
import ourStoryImage from "./assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <nav>
            <Button
                isDisabled={false}
                name="To the collection"
            />

            <Button
                isDisabled={false}
                name="Shop all bags"
            />
            <Button
                isDisabled={true}
                name="Pre-orders"
            />
        </nav>

        <main>
            <Product
                label={"Best seller"}
                image={theHandyBag}
                name={"The handy bag"}
                price={"€400,-"}
            />
            <Product
                label={"Best seller"}
                image={theStylishBag}
                name={"The stylish bag"}
                price={"€250,-"}
            />
            <Product
                label={"New collection"}
                image={theSimpleBag}
                name={"The simple bag"}
                price={"€300,-"}
            />
            <Product
                label={"New collection"}
                image={theTrendyBag}
                name={"The trendy bag"}
                price={"€150,-"}
            />
        </main>

        <footer>
            <Tile>
                <h2>The Brand</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam eos est eveniet facilis fuga hic magnam maiores nemo non nostrum, odit placeat possimus quam similique sunt unde vero, voluptatum.</p>
            </Tile>
            <Tile>
                <img
                    src={brandImage}
                    alt="The Brand"/>
            </Tile>
            <Tile>
                <img
                    src={ourStoryImage}
                    alt="Our Story"/>
            </Tile>
            <Tile>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam eos est eveniet facilis fuga hic magnam maiores nemo non nostrum, odit placeat possimus quam similique sunt unde vero, voluptatum.</p>
            </Tile>

        </footer>
      </>
  );
}

export default App;



