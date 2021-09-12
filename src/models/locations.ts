export{}
import mongoose  from 'mongoose';

 const LocationSchema:any = new mongoose.Schema({
    coordinates: {
      type: [Number],
      index: { type: '2dsphere', sparse: false },
  },
  
});

LocationSchema.pre('save', async function(next) {
 const Location = LocationSchema;
  this.location = {
    type: 'Point',
    coordinates: Location.coordinates,     //[Location.longitude, Location.latitude],
    
  }; 
  
});

const Location  = mongoose.model('Location', LocationSchema);

export default Location;


//export { 'Location', LocationSchema };