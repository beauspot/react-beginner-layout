const Footer = () => {
  return (
    <section className="footer">
      <p>
        Copyright &copy;
        <script>document.write(new Date().getFullYear())</script> All rights
        reserved | This website was made with{" "}
        <i class="icon-heart" aria-hidden="true"></i> by
        <a href="/" target="_blank">
          {" "}
          By I-CORP
        </a>
      </p>
    </section>
  );
};

export default Footer;
