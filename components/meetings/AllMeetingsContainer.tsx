export default function AllMeetingsContainer(props: { children: any }) {
  return (
    <section className="all-meetings flex flex-col gap-[24px] pb-10 min-h-screen">
      {props.children}
    </section>
  );
}
