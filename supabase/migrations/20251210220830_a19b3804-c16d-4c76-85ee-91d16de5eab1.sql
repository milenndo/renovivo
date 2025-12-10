-- Create inspection_requests table
CREATE TABLE public.inspection_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_phone text NOT NULL,
  client_email text,
  address text NOT NULL,
  preferred_datetime text,
  notes text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE public.inspection_requests ENABLE ROW LEVEL SECURITY;

-- Allow public insert (chatbot submissions)
CREATE POLICY "Anyone can submit inspection requests"
ON public.inspection_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can view (we'll add admin check later)
CREATE POLICY "Authenticated users can view inspection requests"
ON public.inspection_requests
FOR SELECT
TO authenticated
USING (true);

-- Only authenticated can update status
CREATE POLICY "Authenticated users can update inspection requests"
ON public.inspection_requests
FOR UPDATE
TO authenticated
USING (true);