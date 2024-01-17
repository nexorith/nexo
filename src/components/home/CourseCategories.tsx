import styles from "./CourseCategories.module.css";
import Image from "next/image";

export const CourseCategories = () => {
  return (
    <section className={styles.awardSection} aria-labelledby="events-title">
      <div className={`container ${styles.awardContainer}`}>
        <header>
          <h2 className={styles.title} id="award-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              We Provide
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Our Services
            </span>
          </h2>
        </header>

        <ul className={styles.awards}>
          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/sm.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              WebApp Development{" "}
            </h3>
            <p className={styles.awardSubText}>

              Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/dmarket.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Digital Marketing{" "}
            </h3>
            <p className={styles.awardSubText}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur totam modi, praesentium natus fugit magni libero tenetur neque obcaecati facilis voluptatum recusandae quod quia eaque consequatur reiciendis quisquam, alias aut.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-03.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Best Customer Support
            </h3>
            <p className={styles.awardSubText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque mollitia fugiat similique earum modi voluptas sint ad adipisci eum harum at ducimus perferendis laborum, porro officia reiciendis qui veniam.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/seo.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              SEO
            </h3>
            <p className={styles.awardSubText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, obcaecati! Eveniet laudantium similique autem doloremque in omnis vitae! Dolores ad provident unde dignissimos inventore ex, quaerat autem est facilis minima?
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/content.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Content Creation{" "}
            </h3>
            <p className={styles.awardSubText}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque unde aliquid placeat ipsa ratione dolores praesentium provident sequi tenetur nisi dolorem voluptate optio sunt culpa aperiam, quia doloribus voluptatum?
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-02.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
             Modern Designs{" "}
            </h3>
            <p className={styles.awardSubText}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia autem eveniet molestias, in odit quaerat ducimus fugiat unde, eum id facere ab eligendi! Doloremque voluptate et asperiores iure dignissimos repudiandae!
            </p>
          </li>

          
        </ul>
      </div>
    </section>
  );
};
