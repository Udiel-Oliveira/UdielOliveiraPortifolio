export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Carregando página"
      className="fixed inset-0 z-[9999] bg-black bg-gradient-to-r from-[#000000] to-[#1F1F1F] flex items-center justify-center flex-col"
    >
      <img src="/assets/LogoCarregamento.gif" alt="" className="w-50" />
    </div>
  );
}