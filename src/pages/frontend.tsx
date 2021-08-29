import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import FrontendList from "../components/frontendlist"

const SecondPage = () => (
  <Layout>
      <Seo title="フロントエンド一覧" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Frontend" link="/frontend" />
        <Title name="Frontend" />
        <FrontendList />
     </motion.div>
  </Layout>
)

export default SecondPage
