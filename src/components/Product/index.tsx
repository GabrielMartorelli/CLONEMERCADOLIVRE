import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import {
  Container,
  Row,
  Painel,
  Column,
  Gallery,
  Section,
  Description
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um Igual</a>
      </Row>

      <Painel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Painel>
    </Container>
  );
};


const WarrantySection = () => (

  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o Produto está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>


);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
      metus eget sodales placerat. Aenean facilisis sodales mi, sit amet porta
      risus feugiat quis. Suspendisse eleifend urna turpis, non efficitur nunc
      interdum et. Nunc massa turpis, iaculis sit amet aliquet et, pharetra id
      lectus.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      <br />
      Phasellus finibus tincidunt fringilla. Suspendisse ante enim, lobortis
      vitae consequat a, consectetur id massa. Maecenas eu massa eget dui
      vestibulum bibendum eget vitae elit. Donec rhoncus maximus lacus eu
      pharetra. Aliquam augue ante, interdum non luctus ac, aliquam eget neque.
      Nullam aliquam sem non efficitur cursus. Integer ac velit neque. Donec in
      pellentesque nibh. Curabitur dui diam, ultricies et mollis eu, laoreet nec
      tortor. Quisque sit amet mauris venenatis, congue turpis nec, condimentum
      lectus. Curabitur sit amet est nec massa dapibus posuere. Donec cursus
      mauris pellentesque laoreet tempus. Maecenas in ligula turpis.
      Pellentesque varius ornare sagittis. Mauris efficitur arcu non felis
      sagittis vehicula. Mauris porttitor varius lacus. Morbi mattis
      pellentesque magna eu tristique. Vestibulum aliquam orci in quam interdum
      fermentum. Sed volutpat justo nec mauris efficitur fringilla. Phasellus
      non lacus neque. Nullam quis odio sed nibh tempus congue. Aenean viverra
      consectetur nunc, et tincidunt enim placerat vitae. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed lacinia lectus quam, vitae cursus
      turpis facilisis eget. Praesent pretium mattis ante quis gravida. Maecenas
      tempus ut sem at posuere. Fusce malesuada orci ligula, nec vulputate
      turpis eleifend vel. Aliquam faucibus nec quam id convallis. Fusce sed
      mollis metus. Vivamus eget tincidunt elit. Morbi vehicula enim sit amet
      turpis condimentum, iaculis sollicitudin lorem ullamcorper. Sed mattis ex
      eget cursus lobortis. Fusce ante metus, auctor nec velit eget, gravida
      vulputate tortor. Nulla tincidunt, orci non varius eleifend, ligula leo
      bibendum libero, in pharetra felis ligula aliquet ante. Duis dictum
      dapibus ipsum. Nam id ante cursus, tempor tortor et, euismod est.
    </p>
  </Description>
);

export default Product;
