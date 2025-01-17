import { IFormation } from "@/types/dictionary";

import "./Formation.scss";

export const Formation = ({ dictionary }: { dictionary: IFormation }) => {
  const formationInfo = dictionary.formations;

  return (
    <section className="experienceSection p-5 flex items-center justify-center flex-col">
      <h2 className="text-4xl font-semibold">{dictionary.title}</h2>

      <div className="mt-4 flex justify-center items-center gap-6 flex-col-reverse">
        {formationInfo.map((info) => (
          <div key={info.institution} className="formationCard p-3 rounded-2xl">
            <h3 className="text-2xl font-semibold">{info.title}</h3>
            <hr />
            <p className="font-semibold">{info.institution}</p>
            <span>{info.startDate} - {info.endDate}</span>
           
          </div>
        ))}
      </div>
    </section>
  );
};
