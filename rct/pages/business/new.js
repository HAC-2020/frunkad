import { Component } from "react";
import Head from "next/head";
import SimpleForm from '../../components/new-business-form';
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function formSubmitted(formData, state) {
  console.log(formData);
  fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/NewBusiness",
    {method: 'POST', body: JSON.stringify(formData), headers: {'Content-Type': 'application/json'}}
  ).then((res) => res.json()).then(() => console.log('saved')).catch(() => alert('An error occurred'));
}

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
        <SimpleForm onSubmit={formSubmitted} />
      </Layout>
    );
  }
}

export default NewBusiness;
