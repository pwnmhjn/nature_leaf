import { nurseries, plants } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Phone, Mail, Star, Leaf } from 'lucide-react';

export function Nurseries() {
  const getPlantCount = (nurseryId: string) => {
    return plants.filter(p => p.nurseryId === nurseryId).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-900 mb-4">
          Our Partner Nurseries
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We partner with local, eco-friendly nurseries committed to sustainable practices 
          and quality plants.
        </p>
      </div>

      {/* Nurseries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nurseries.map((nursery) => (
          <Card key={nursery.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-green-900">
                    {nursery.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-700">{nursery.rating}</span>
                    <span className="text-sm text-gray-500">/5.0</span>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-300">
                  <Leaf className="w-3 h-3 mr-1" />
                  Eco-Friendly
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                {nursery.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>{nursery.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 flex-shrink-0 text-green-600" />
                  <a href={`tel:${nursery.phone}`} className="hover:text-green-600">
                    {nursery.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0 text-green-600" />
                  <a href={`mailto:${nursery.email}`} className="hover:text-green-600">
                    {nursery.email}
                  </a>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold text-sm text-green-900 mb-2">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {nursery.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Plant Count */}
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-green-700">
                    {getPlantCount(nursery.id)}
                  </span>{' '}
                  plants available from this nursery
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4 text-center">
          Why Choose Our Partner Nurseries?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Eco-Friendly</h3>
            <p className="text-sm text-gray-600">
              All partners follow sustainable and environmentally conscious practices
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-600">
              Only the healthiest plants from trusted local growers
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Local Support</h3>
            <p className="text-sm text-gray-600">
              Supporting local businesses and reducing carbon footprint
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
