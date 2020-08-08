import { Component } from "react";
import Head from "next/head";

// App Specific
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

class NewBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      submitted: false,
    };
  }
  submitForm(data) {
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : "";
    });
  }
  render() {
    const title = "New Business";
    return (
      <Layout>
        <Navbar />
        <Head>
          <title>{title}</title>
        </Head>
      </Layout>
    );
  }
}

export default NewBusiness;
