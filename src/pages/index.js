import { Layout } from "components/layouts/Layout";
import fetchApplications from "utils/fetchApplications";
import fetchSkills from "utils/fetchSkills";

export default function HomePage(props) {
  return <Layout props={props} />;
}

export async function getStaticProps() {
  const applications = await fetchApplications();
  const skills = await fetchSkills();

  return {
    props: { applications, skills },
    revalidate: 3600,
  };
}
