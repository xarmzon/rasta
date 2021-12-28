import NexPageLinkButton from "../components/NexPageLinkButton";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <section className="overflow-hidden relative">
      <Welcome />
      <NexPageLinkButton url="/about" text="About Me" />
    </section>
  );
}
