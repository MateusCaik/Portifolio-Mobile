import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imgportifolio from './fotoportifolio.png';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={imgportifolio} style={styles.imagem} />
      <Text style={styles.title}>Mateus Costa</Text>
      <Text style={styles.txtpag}>19 anos, estudante de Análise e Desenvolvimento de Sistemas.</Text>
      <Text style={[styles.txtpag, { marginTop: 20 }]}>Caçote - Recife/PE</Text>
      <Text style={styles.txtpag}>m.caik.cost@gmail.com </Text>
      <Text style={styles.txtpag}>(81) 99634-4577</Text>
      <Text></Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.title, {marginBottom: 20}]}>Sobre</Text>
      <Text style={[styles.txtpag, { marginBottom: 20 }]}>Me chamo Mateus Caik, sou um jovem apaixonado e curioso pela tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas pelo Embarque Digital no Senac.</Text>
      <Text style={[styles.txtpag, { marginBottom: 20 }]}>Minha jornada na programação começou em 2023, quando comecei a faculdade em que estou atualmente. Antes de entrar na faculdade eu nunca tinha tido contato com programação em si, foi nela em que me descobri e me apaixonei por tal.</Text>
      
      <Text style={styles.title2}>Hard Skills</Text>
      <Text style={styles.txtpag}>JavaScript, C#, Node.js, C</Text>
      

      <Text style={[styles.title2, { marginTop: 20 }]}>Soft Skills:</Text>
      <Text style={styles.txtpag}>Aprendizado contínuo, trabalho em equipe, resolução de problemas, comunicação eficaz, autodisciplina, gestão do tempo, curiosidade, iniciativa, flexibilidade e adaptabilidade.</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.title, { marginBottom: 20 }]}>Formação acadêmica</Text>
      <Text style={styles.title2}>Ensino Superior</Text>
      <Text style={[styles.txtpag, { marginBottom: 20 }]}>Faculdade - Senac-PE - Análise em Desenvolvimento de Sistemas - Situação: Cursando.</Text>
    </View>
  );  
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.title, { marginBottom: 20 }]}>Experiência Profissional</Text>
      <Text style={styles.title2}>Em busca de uma primeiro Experiência</Text>

    </View>
  );
};



const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Sobre':
        return <Pagina1 />;
      case 'Formação Acadêmica':
        return <Pagina2 />;
      case 'Experiência Profissional':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Portfólio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre')}>
            <Text style={styles.menuItemText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Formação Acadêmica')}>
            <Text style={styles.menuItemText}>Formação acadêmica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Experiência Profissional')}>
            <Text style={styles.menuItemText}>Experiência profissional</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Experiência Informal')}>
            <Text style={styles.menuItemText}>Experiência Informal</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  title2: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  txtpag: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: '100%',
    marginBottom: 20
  }
});

export default App;