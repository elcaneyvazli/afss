import React from "react";
import aboutt from "../img/about.jpg";
import Slide from "react-reveal/Slide";

const about = () => {
  return (
    <div className="container mx-auto my-[5rem] md:my-[15rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Slide left>
          <div className="pt-0 md:pt-[6rem]">
            <img
              src={aboutt}
              alt=""
              className="h-[44rem] w-[37.6rem] rounded-3xl"
            />
          </div>
        </Slide>
        <Slide right>
          <div className="">
            <h1 className="text-secondary text-[5rem]">Biz Kimik?</h1>
            <p className="text-primary text-[1.6rem]">
              Azərbaycan Futuroloqlar Cəmiyyəti (AFSS) 2006-cı ilin yanvarında
              qeyri-kommersiya tədqiqat mərkəzi kimi yaradılıb.Bu, mövcud
              tendensiyaları öyrənmək və gələcək tendensiyaları proqnozlaşdırmaq
              məqsədi ilə Azərbaycanda ilk belə tədqiqat mərkəzidir.2011-ildə
              Azərbaycan Futuroloqlar Cəmiyyəti, Minilliyin Layihəsi, Rabitə və
              Yuksək Texnologiyaları Nazirliyi, Azərbaycan Respublikası
              Prezidenti yanında Strateji Araşdırmalar Mərkəzi və Azərbaycan
              Milli Elmlər Akademiyasının dəstəyi ilə ilk dəfə hazırlanmış
              "Azərbaycanın gələcək durumu indeksi (AZ-SOFI-2011)” üzrə
              tədqiqatı keçirilib. AZ-SOFI indeksi- son 20 ildə ölkədə inkişaf
              templəri və aparılan islahatlar əsasında ölkənin gələcək 10 ildə
              (2011-2020) inkişaf perspektivlərini müəyyən edən indeksdir. Bu
              araşdırmanın ilkin mərhələsində ölkənin gələcəyi üçün əhəmiyyətli
              olan dəyişikliklər və ona təsir göstərən hadisələr nəzərə alınıb,
              növbəti addım kimi elmi əsaslanmış şəkildə Azərbaycanın 2020
              mənzərəsini müəyyənləşdirmək üçün 100-dən çox alim və ekspertin
              təcrübəsindən istifadə edilərək, ölkəmizin gələcək durumu ilə
              bağlı onlayn tədqiqat sorğusu keçirilib və hesabat şəkilində dərc
              edilib. Hesabatın ilk nüsxəsi Azərbaycan Respublikası Prezidenti
              cənab İlham Əliyevə təqdim olunmuşdur.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default about;
