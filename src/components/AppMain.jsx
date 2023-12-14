import PostContainer from "./PostContainer";

// const Code = styled.code`
//   position: relative;
//   display: block;
//   box-sizing: border-box;
//   width: 300px;
//   height: 300px;
//   margin: 50px auto;
//   padding: 20px;
//   background-color: #292c32;
//   color: #ffffff;
//   line-height: 1.5;
//   border-radius: 4px;
// `;

// const Language = styled.p`
//   position: absolute;
//   bottom: 5px;
//   right: 5px;
//   font-size: 8px;
//   font-weight: 100;
//   opacity: 0.8;
// `;

function AppMain() {
  return (
    // <Code>
    //   /* hello, Front World! */
    //   <br></br>
    //   <br></br>
    //   const a = 'React'
    //   <br></br>
    //   const b = 'Vue'
    //   <br></br>a &gt; b ? 'Good' : '...'
    //   <br></br>
    //   <br></br>
    //   // Make the common UI components
    //   <Language>JavaScript</Language>
    // </Code>

    <PostContainer></PostContainer>
  );
}

export default AppMain;
