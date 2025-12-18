import { useEffect, useRef, useState } from "react";
import chairBase from "../assets/ff-chair.jpg";
import Toast from "./Toast";

const PfpGenerator = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(chairBase);
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const uploadPreviewRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    if (uploadPreviewRef.current) {
      URL.revokeObjectURL(uploadPreviewRef.current);
    }
    const temporaryUrl = URL.createObjectURL(file);
    uploadPreviewRef.current = temporaryUrl;
    setUploadPreview(temporaryUrl);
    setGeneratedImage("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setInfo("Generating… this may take up to a minute.");
    setError("");

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const response = await fetch("/api/chair-pfp", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to generate the chair PFP.");
      }

      const data = await response.json();
      if (!data.image) {
        throw new Error("No image returned from the generator.");
      }

      setGeneratedImage(`data:image/png;base64,${data.image}`);
    } catch (err) {
      console.error(err);
      setError("Generation failed. Try again soon.");
      setInfo("");
    } finally {
      setLoading(false);
      setTimeout(() => setInfo(""), 4000);
    }
  };

  const previewUrl = generatedImage || uploadPreview;
  const downloadHref = generatedImage || previewUrl;

  useEffect(() => {
    return () => {
      if (uploadPreviewRef.current) {
        URL.revokeObjectURL(uploadPreviewRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="pfp-generator-section reveal">
        <div className="pfp-generator-heading">
          <p className="section-kicker">Financial Freedom PFP Generator</p>
          <h2 className="pfp-generator-title">
            Take your rightful seat at the table of Financial Freedom.
          </h2>
          <p>
            Upload, generate, download, and flex the new profile pic. Tag
            #FinancialFreedom and mention <span>$FF</span> so the movement sees you
            in your seat.
          </p>
          <p className="pfp-disclaimer">
            Disclaimer: Guardrails apply; unclear or low-res uploads may reduce accuracy. Beta—improving continuously.
          </p>
          <form className="pfp-upload-form" onSubmit={handleSubmit}>
            <label htmlFor="pfp-photo">Upload selfie</label>
            <input id="pfp-photo" type="file" accept="image/*" onChange={handleFileChange} />
            {error && <p className="pfp-upload-error">{error}</p>}
          </form>
          <div className="pfp-meta-grid">
            <div className="pfp-card">
              <h4>Upload</h4>
              <p>Upload your existing PFP so you can take your seat at the table of Financial Freedom.</p>
            </div>
            <div className="pfp-card">
              <h4>Generate</h4>
              <p>Our PFP engine crafts a refined PFP with your likeness, ready to share with the community.</p>
            </div>
            <div className="pfp-card">
              <h4>Share</h4>
              <p>Save the PFP, tag #FinancialFreedom, and include our $FF ticker.</p>
            </div>
          </div>
        </div>

        <div className="pfp-generator-preview">
          <div className="pfp-preview-card">
            <div className="pfp-base-image">
              <img src={previewUrl} alt="Generated chair PFP preview" />
              <span>Preview</span>
            </div>
            <div className="pfp-preview-actions">
              <button
                type="button"
                className={`btn btn-primary ${loading ? "btn-pulsing" : ""}`}
                onClick={handleSubmit}
                disabled={!selectedFile || loading}
              >
                {loading ? "Generating..." : "Generate preview"}
              </button>
              <a
                className={`btn btn-outline ${!generatedImage ? "disabled" : ""}`}
                href={downloadHref}
                download="financial-freedom-pfp.png"
              >
                Download final PFP
              </a>
            </div>
          </div>
        </div>
      </section>
      {info && <Toast message={info} />}
    </>
  );
};

export default PfpGenerator;
