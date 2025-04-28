
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Shield } from "lucide-react";

interface RobotVerificationProps {
  onVerified: () => void;
}

const RobotVerification = ({ onVerified }: RobotVerificationProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (checked: boolean) => {
    setChecked(checked);
    if (checked) {
      onVerified();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-center">
          <Shield className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-center">Vérification de sécurité</h2>
        <p className="text-center text-muted-foreground">
          Veuillez confirmer que vous n'êtes pas un robot avant d'accéder au site.
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Checkbox
            id="robot"
            checked={checked}
            onCheckedChange={handleCheck}
          />
          <label
            htmlFor="robot"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Je ne suis pas un robot
          </label>
        </div>
      </div>
    </div>
  );
};

export default RobotVerification;
