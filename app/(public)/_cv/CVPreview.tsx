"use client";

import { MapPin, Mail, Phone, Download, Calendar } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaBriefcase, FaGraduationCap, FaInstagram } from "react-icons/fa";
import { CVData } from "./cv";
import { fmtDate } from "./utils";
import { RiProfileLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";

interface Props {
  data: CVData;
}

function SectionTitle({ icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex justify-center items-center gap-2 bg-[#faf7f0] p-2 mb-3">
      {icon}
      <h3 className="text-[15px] font-semibold text-[#ab7a2c] uppercase tracking-wider">
        {label}
      </h3>
    </div>
  );
}

function InfoRow({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
}) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-500">
      <span className="text-gray-600 flex-shrink-0">{icon}</span>
      <span className="truncate">{value}</span>
    </div>
  );
}

export default function CVPreview({ data }: Props) {
  const fullName =
    [data.firstName, data.lastName].filter(Boolean).join(" ") || "";

  const initials =
    (data.firstName?.[0] || "") + (data.lastName?.[0] || "") || "";

  // Fixed PDF Download
  async function handleDownload() {
    const el = document.getElementById("cv-print-area");
    if (!el) return;

    try {
      const htmlToImage = await import("html-to-image");
      const { jsPDF } = await import("jspdf");

      // Generate image from HTML
      const dataUrl = await htmlToImage.toPng(el, {
        quality: 1,
        pixelRatio: 2,
        cacheBust: true,
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210; // A4 width mm
      const pdfHeight = 297; // A4 height mm

      const img = new Image();
      img.src = dataUrl;

      img.onload = () => {
        const imgWidth = pdfWidth;
        const imgHeight = (img.height * pdfWidth) / img.width;

        let heightLeft = imgHeight;
        let position = 0;

        // First page
        pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Multi-page support
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        pdf.save(`${fullName}-CV.pdf`);
      };
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF");
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* CV Card */}
      <div
        id="cv-print-area"
        className="bg-white shadow-lg w-full overflow-hidden min-h-[9in] p-2 lg:p-4"
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-2 lg:p-6 pb-4">
          {data?.photo && (
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 flex-shrink-0 overflow-hidden">
              <img
                src={data?.photo}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">
              {fullName}
            </h2>

            {data.professionalTitle && (
              <p className="text-xs lg:text-sm text-gray-500 mt-0.5">
                {data.professionalTitle}
              </p>
            )}

            {/* Contact info row */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              <InfoRow
                icon={<MapPin size={11} />}
                value={[data.location, data.zipcode].filter(Boolean).join(", ")}
              />

              <InfoRow
                icon={<Calendar size={11} />}
                value={data.dob ? fmtDate(data.dob) : ""}
              />

              <InfoRow icon={<Mail size={11} />} value={data.email} />
              <InfoRow icon={<Phone size={11} />} value={data.phone} />

              {/* {data.linkedin && (
                <InfoRow
                  icon={<CiLinkedin size={11} />}
                  value={
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  }
                />
              )} */}

              {/* {data.instagram && (
                <InfoRow
                  icon={<FaInstagram size={11} />}
                  value={
                    <a
                      href={data.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  }
                />
              )} */}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-5">
          {/* Profile */}
          {(data.role ||
            data.salary ||
            data.availability ||
            data.companyType ||
            data.niveau ||
            data.style ||
            data.cuisineConcept ||
            data.contractType ||
            data.hoursPerWeek) && (
            <div>
              <SectionTitle
                icon={<RiProfileLine className="text-[#ab7a2c] !text-[18px]" />}
                label="Profile"
              />

              <div className="text-xs text-gray-700 space-y-1 leading-relaxed">
                {data.role && (
                  <div className="flex gap-1">
                    <span className="text-gray-600 w-28 flex-shrink-0">
                      Positions:
                    </span>
                    <span className="font-medium text-gray-800">
                      {data.role}
                    </span>
                  </div>
                )}

                {data.salary && (
                  <div className="flex gap-1">
                    <span className="text-gray-600 w-28 flex-shrink-0">
                      Salary Indication:
                    </span>
                    <span className="font-medium text-gray-800">
                      {data.salary}
                    </span>
                  </div>
                )}

                {data.availability && (
                  <div className="flex gap-1">
                    <span className="text-gray-600 w-28 flex-shrink-0">
                      Availability:
                    </span>
                    <span className="font-medium text-gray-800">
                      {data.availability}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Experience */}
          {data.experiences.length > 0 && (
            <div>
              <SectionTitle
                icon={<FaBriefcase className="text-[#ab7a2c] !text-[18px]" />}
                label="Professional Experience"
              />

              <div className="space-y-2">
                {data.experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex justify-between items-baseline gap-2"
                  >
                    <div className="text-xs flex-1 min-w-0">
                      <span className="font-semibold text-gray-800">
                        {exp.company || "Company"}
                      </span>

                      {exp.jobTitle && (
                        <>
                          {", "}
                          <span className="text-gray-500">{exp.jobTitle}</span>
                        </>
                      )}
                    </div>

                    <div className="text-[10px] text-amber-600 text-right whitespace-nowrap flex-shrink-0">
                      {fmtDate(exp.start)} –{" "}
                      {exp.end ? fmtDate(exp.end) : "Present"}
                      {exp.location && ` | ${exp.location}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.educations.length > 0 && (
            <div>
              <SectionTitle
                icon={
                  <FaGraduationCap className="text-[#ab7a2c] !text-[18px]" />
                }
                label="Education"
              />

              <div className="space-y-2">
                {data.educations.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex justify-between items-baseline gap-2"
                  >
                    <div className="text-xs flex-1 min-w-0">
                      <span className="font-semibold text-gray-800">
                        {edu.degree || edu.school || "School"}
                      </span>

                      {edu.school && edu.degree && (
                        <>
                          {", "}
                          <span className="text-gray-500">{edu.school}</span>
                        </>
                      )}
                    </div>

                    <div className="text-[10px] text-amber-600 text-right whitespace-nowrap flex-shrink-0">
                      {fmtDate(edu.start)} –{" "}
                      {edu.end ? fmtDate(edu.end) : "Present"}
                      {edu.location && ` | ${edu.location}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates */}
          {data.certificates.length > 0 && (
            <div>
              <SectionTitle
                icon={<PiCertificate className="text-[#ab7a2c] !text-[18px]" />}
                label="Certificates"
              />

              <div className="flex flex-wrap gap-1.5">
                {data.certificates.map((c) => (
                  <span
                    key={c.id}
                    className="px-2.5 py-1 bg-[#ab7a2c] text-white text-[12px] font-medium rounded"
                  >
                    {c.cert || "Certificate"}
                    {c.date && (
                      <span className="opacity-90 ml-1">
                        ({fmtDate(c.date)})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div>
              <SectionTitle
                icon={<GrLanguage className="text-[#ab7a2c] !text-[18px]" />}
                label="Languages"
              />

              <div className="grid grid-cols-2 gap-4">
                {data.languages.map((l) => (
                  <div key={l.id} className="text-xs">
                    <span className="font-semibold text-gray-800">
                      {l.lang || "Language"}
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      — {l.level || "Level"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {data.references.length > 0 && (
            <div>
              <SectionTitle
                icon={<FiUsers className="text-[#ab7a2c] !text-[18px]" />}
                label="References"
              />

              <div className="space-y-3">
                {data.references.map((r) => (
                  <div key={r.id} className="text-xs">
                    <p className="font-semibold text-gray-800">
                      {r.name || "Name"}
                    </p>

                    <p className="text-gray-500">
                      {r.jobTitle}
                      {r.org ? ` — ${r.org}` : ""}
                    </p>

                    <div className="flex gap-3 mt-0.5">
                      {r.email && (
                        <InfoRow icon={<Mail size={10} />} value={r.email} />
                      )}
                      {r.phone && (
                        <InfoRow icon={<Phone size={10} />} value={r.phone} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="cursor-pointer mt-4 w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors text-sm"
      >
        <Download size={16} />
        Download CV as PDF
      </button>
    </div>
  );
}
