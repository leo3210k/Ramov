import React from 'react';

function WhatsappButton({ background_color, text}: { background_color: string, text: string }) {
  return (
    <div className="text-xs text-white font-semibold bg-red-700 rounded-full uppercase py-3 px-6">
      aproveite as vantagens!
    </div>
  );
}

export default WhatsappButton;