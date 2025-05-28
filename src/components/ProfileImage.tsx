
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import { useToast } from "@/hooks/use-toast";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProfileImage = ({ src, alt, className }: ProfileImageProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>(src);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const { toast } = useToast();

  const handleRemoveBackground = async () => {
    try {
      setIsProcessing(true);
      toast({
        title: "Processing image...",
        description: "Removing background, this may take a moment.",
      });

      // Load the original image
      const response = await fetch(src);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      // Remove background
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedImageSrc(processedUrl);
      setIsProcessed(true);
      
      toast({
        title: "Background removed!",
        description: "Image processed successfully.",
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Error",
        description: "Failed to remove background. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setProcessedImageSrc(src);
    setIsProcessed(false);
    toast({
      title: "Image reset",
      description: "Original image restored.",
    });
  };

  return (
    <div className="text-center">
      <img 
        src={processedImageSrc}
        alt={alt}
        className={className}
      />
      <div className="mt-4 space-y-2">
        {!isProcessed ? (
          <Button
            onClick={handleRemoveBackground}
            disabled={isProcessing}
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-200 hover:bg-gray-700"
          >
            {isProcessing ? "Processing..." : "Remove Background"}
          </Button>
        ) : (
          <Button
            onClick={handleReset}
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-200 hover:bg-gray-700"
          >
            Reset to Original
          </Button>
        )}
      </div>
    </div>
  );
};
