// Componente ServiceCard para mostrar servicios individuales

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
      {/* Icono circular */}
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <div className="text-gray-700">
          {icon}
        </div>
      </div>
      
      {/* Título */}
      <h3 className="text-lg font-bold mb-3" style={{ color: '#1A1A1A' }}>
        {title}
      </h3>
      
      {/* Descripción */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
