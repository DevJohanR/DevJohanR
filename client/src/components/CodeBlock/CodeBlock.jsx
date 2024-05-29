import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeBlock.module.css';
import '../../assets/prismStyles.css'; // Asegúrate de importar el archivo de estilos

const CodeBlock = ({ codeString, language }) => {
  return (
    <div className={styles.codeContainer}>
      <SyntaxHighlighter language={language} style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
