import React from "react";
import Head from "next/head";
const Layout = ({title,keywords,description,children}) => {
  return <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        {children}
        
    </Head>
  </div>;
};

Layout.defaultProps={
    title:"sports News | find the lstest dsports news",
    description:"A website thst brings you lstest newa about sports",
    keywords:"cricket,football ,f1,tennis,badminton,folf,voleyball"

}
export default Layout;
