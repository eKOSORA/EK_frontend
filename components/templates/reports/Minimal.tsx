import ReactPDF, {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import React, { ReactDOM } from "react";

interface Props {}

const Minimal: React.FC<Props> = () => {
  return (
    <Document>
      <Page style={styles.body}>
        {/*
        eslint-disable-next-line jsx-a11y/alt-text
         */}
        <Image
          style={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFYZglLXQ55i2ATm8cdISyF7pC6riwsokcIlzZBJgMQ&s"
        />
        <Text style={styles.title}>Rwanda Coding Academy</Text>
        <Text style={styles.author}>Born to Code</Text>

        <Text style={styles.header} fixed>
          Name: Mugisha Precieux
        </Text>

        <Text style={styles.header} fixed>
          Class: Y2B
        </Text>

        <Text style={styles.header} fixed>
          Name: Mugisha Precieux
        </Text>

        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>
        <Text style={styles.text}>
          En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
          mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
          antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
          carnero, salpicón las más noches, duelos y quebrantos los sábados,
          lentejas los viernes, algún palomino de añadidura los domingos,
          consumían las tres partes de su hacienda. El resto della concluían
          sayo de velarte, calzas de velludo para las fiestas con sus pantuflos
          de lo mismo, los días de entre semana se honraba con su vellori de lo
          más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una
          sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que
          así ensillaba el rocín como tomaba la podadera. Frisaba la edad de
          nuestro hidalgo con los cincuenta años, era de complexión recia, seco
          de carnes, enjuto de rostro; gran madrugador y amigo de la caza.
          Quieren decir que tenía el sobrenombre de Quijada o Quesada (que en
          esto hay alguna diferencia en los autores que deste caso escriben),
          aunque por conjeturas verosímiles se deja entender que se llama
          Quijana; pero esto importa poco a nuestro cuento; basta que en la
          narración dél no se salga un punto de la verdad
        </Text>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "left",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 0,
    marginHorizontal: 0,
  },
  header: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "left",
    color: "black",
  },
});

ReactPDF.render(<Minimal />, "/Downloads");

export default Minimal;
