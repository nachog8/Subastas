/*
  # Initial Schema Setup

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `credits` (integer, default 3)
      - `created_at` (timestamp)
      - `location` (text)
      - `name` (text)
    - `products`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `end_time` (timestamp)
      - `created_at` (timestamp)
    - `bids`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `product_id` (uuid, references products)
      - `amount` (decimal)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  credits integer DEFAULT 3,
  created_at timestamptz DEFAULT now(),
  location text,
  name text
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  end_time timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create bids table
CREATE TABLE bids (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  amount decimal NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active'
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE bids ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Products policies
CREATE POLICY "Anyone can read products"
  ON products FOR SELECT
  TO authenticated
  USING (true);

-- Bids policies
CREATE POLICY "Users can read all bids"
  ON bids FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create bids"
  ON bids FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert some sample products
INSERT INTO products (title, description, image_url, end_time) VALUES
('Smart TV Samsung 40"', 'Smart TV Samsung 40" LED Full HD con tecnología Crystal Display', 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a', now() + interval '24 hours'),
('iPhone 13 Pro', 'iPhone 13 Pro 256GB, Color Grafito', 'https://images.unsplash.com/photo-1632661674596-618b516d028d', now() + interval '48 hours'),
('PlayStation 5', 'Consola PlayStation 5 Digital Edition', 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db', now() + interval '72 hours');