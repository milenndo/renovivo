-- Create storage bucket for chat uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('chat-uploads', 'chat-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload files (no auth required for chat)
CREATE POLICY "Anyone can upload chat files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'chat-uploads');

-- Allow anyone to view chat files
CREATE POLICY "Anyone can view chat files"
ON storage.objects FOR SELECT
USING (bucket_id = 'chat-uploads');

-- Allow deletion of old files (cleanup)
CREATE POLICY "Anyone can delete chat files"
ON storage.objects FOR DELETE
USING (bucket_id = 'chat-uploads');