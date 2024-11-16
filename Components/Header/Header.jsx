import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import * as Icon from 'react-native-feather';

const Header = ({ notificationCount = 4, cartCount = 3 }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAPEBAPDxAQDw8QDhAPDxAPEBAPFRUWFhURFRUYHSggGBolGxUWITEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OFhAQGislHyUrKy8vKysrKy0tKy0rLS0rLS0rNSsrLSstLSstOC0tKy0tLSs3LSsrLS0tLSstLS03Lf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwQFBwj/xAA7EAABAwIDBgMFBgUFAQAAAAABAAIRAyEEEjEFBkFRYXETgZEiMqGxwRRCUmLR8AdygpLhIzNDsvFT/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEEAgMF/8QAIREBAQEAAgMAAgMBAAAAAAAAAAECAxESITETQVFhcQT/2gAMAwEAAhEDEQA/AOYAmAgBNUCaAE4QKE4RClCgUJpohAkQnCEChKFJEKBIhOEwEEYRClChXrNpjM9wa3mbBA4ShaFPbuHcSBU0/I+PWEmbeoFxbmdI503gfJB0YRCVGs192Oa4cYIMd1lhBCE4U4RCCEJwpwiFRDKnClCEEYRClCAECAThSCIQIKQCAFKEAgBMBOEBCE4Qg5sJhIKQQOEwEBNAk4TAQgAE0QnCBITCECSTQgSjUqtYC57g1o1LjATe4NBcSAAJJJgAcyqFtvbRr1CGuPhNPsAhsEi2aeqg6W096nZnMoBkAkCpdxMcRwCrzKjqjvadmJ4ucJ/VZG4MvBcXDtlmT8lno03UzJp02mLBwpNPkSUVnp0GBpz0qsx9wnvqCPqtR+LpN0a/MPvtbBjk4EwfRa208e6oYcSYEAPaLDkCCVyyfJOjt1X7Uc12dlRwdEe6WOA5TPwXW2dvfUZAqjxW8dA/yPHzVUlIlDt67s/H067Q+m4OB1GhB5EcCtwBeVbA2m6hVa4H2XQ14mxHMr1LCVQ9jXjQiURkhOEwE1RGEoWQJEIIIUkQgQCcJgKUIIgKQCAFJAoTTAThAkJwhBywmEgpBAwpQkFJAJpJoBNCEBCITRCgUIhNEIOBvlP2aBoajc3KACb8xZeevqQbXPMxr0C9B33oudhZboyowvH5bj6hULAYN1avTpNMGo9rMx0EmJPbVFkdXYew8Rip8Kk6s6wLnDNTb3cfpKsVL+HW0XjLlY1tzGclvaDp+9V63u9smnh6TKNNoDWgDT3j+Jx4kqyU4a0rL+a2tn4c5n9vmzHbg4yi8CowBpdlDmnM3l3hb+F/h5WcPaABmzgZa5vbUHRe8VQ1wu0HuubUbrAAC51z11jgzfrxzE/w7qASCJ5HguLtDdCrSBJ4ale44hirG3WgNcuM8+u3e/8Anx08UxFE03ZSIj5c16tu6AMNRh4qewDnEgHyNwvPN5Wjxh/IPqrpuEw/Y2k3Be/L0aHEfOVuze52+fqdXpYghSCFXJQkpBBVEUQpQhABEJpgIEAnCAFKECCaaEAhNCDlBSCQUoQEJoTQATQAnCAQiEQgE0IUAhNCCL2Agg3BBBCo+7eBjFUwwAg1AGkx7JuBK9J2Rg/FeAWOeC4NOV2XICHHP190W6rR2Ju07CbQ8N8OYQ+pSdFnsJJFuY08l475J7y0Y4r1Nfqr/hJXRD2lsOc0HuF5ttzFYqo9+V4o0mvcymAcpN4zEi5P66Ku7QwWMaQ44wgwIYCWuHds5j6LNnMa7bXr2IaBcOEd1DKIkkKgbuYrHOcym8Cq2I8QHQjny7FG+G1cRh4pzlceVyI5Lz8Z29O+p2tePxLGz7QHcql7w4kOs1wPYqpVsJXqk1K1U0Qbjxq9KkTPJjjm+CwV9mvBBp1y8gWnkeREghe2eKR5a5dX100N5sOQ8P4OFvJXndOllwWHHOnm/uJd9VUNvNdUZQb99xIP80D9Cu7uxVqsqUqNR5INEhrNGtawANAHzK0Z1JJGTXHbbYtQCE4RC9XgSFKEoVCQmgIHCYCAmECAThNEIEmmE0CQhCDmAJoCaACkkhA00JoBJNAQCEIUAEIQgs+5kf6p4gtMeTo+q36lJ78RTqPDRArmnlnQ+G2/WZVf3YxXh4hoJgVBkPKTdvxHxVj2040X0H/8eZ1ImfdLyHAdpbHmsXNmzfbfw6l4+mrtrd8VxOZ7SJy5HFlzIJkXBgn1VQqbiMFbxWYR5efzM8LSCYK9Pw7wVsVHhom3muM9yfXrf8V3YmzPs9NlMgBzRHvF5jkXG5VX34IbjKD7SCbnQE6H1V5pEvcY4nVUn+IDDnbDcxmFxn69K0dr7AFekxv2Zj8ri9rm1HB+Z3vFxcZcTA1J0XCO6dVhdVDPCA+4HgyOg0GgV63Xxfi0Gn7zZY8HUObYg+invBWyU3dl1N6+Odceb7eV7TluR4u5jzE8y1zfqtjdnEeNiKbojw/EBjQyw/VYNrVSXtY2C69S+lrCfMz5Lr7pYAUy4iIawDu92pPotGZ3YzavWdLIUQmhaWIklIhCojCaaAoABShAQqHCIQmgIRCaSgSE00HJCkEgmFQKQSTCBpoCEAhCEAE4STUChOE0QgGki4sRcHquttTb9Sthn0SxheWgh9/eaczTHAyBxXKUgudYmvrvO7n4tuwtpB9Fr5E5QXR6rLV2lTLgKj4i+XryPVU/dzF5KjqZiA7KZPCfYMR1WSnsqu+o51F1GpkcXFlRz2+JN4DgDlPHQrBrPWun0ePXcnTo7fxLzUY/D1302tnMzKHU39TMEeRC863q2/ijUGYDKB7D2e2x3Uf5V/fTxhaQMJhiDIc0OLzpBHtRa/xXEx2DxbmhrcNhaDRNw2mD2HvfJd56n6emuPVnqq/unvG6lUcXZsrxL+Ht8I+Sse2NsNrUQ9pJa6RexDm+80jgQq27YOKqPAc6hSYDLnNHtCNSLBR2pVp08OGseXF1VzjOo9nJz4q3Mt9PC61mWVk3fwDcS/EVHEjKWMbHnIj0Vrw2GbTblaIHEnUnmVxdyKUYdz/x1n+jQGj5Kwwtecxh1q30ihShIrpwSEIQCITQgEwhNUATAQE0AlCaFAoQiE0HICaiFIKhhSCipBBJCSkgEICEDQhCAQhNQAUlFMINXHYQtH2lvu5hTrflBgtf6iP7VtbvbbNMuc6Xh5EX4841jqu3sBgcysxwBa4NBB0IMghUvb2zn4Gpmbmfhn2nUs19l36/pfJvq6ua2cd8cyxf8RtGpVpzhyzNFw4wQfJVo0sc+S/Iwaa5p5xf9ytDZe3KdMBxdyHCOU9llxe+FNwfcN9mxmZjQ/L0XExY95yT+WhvBj/DaaYOabPOk9IjRUovdUdAuAYbxvzWXam0jVfDJJM25Tr8ZRgqOQ3u74fuV7Zz4xm3ryq+bqgCgWD7ryB2ytXYhcLdR/8AuM6NcPiD9F3ivbF7zHhyTrVKFEqSS6cIlIJoQOEJBNAJpQmFQ00gmEAnCIQoBJSQg4oTSCaokpBJAQTCYUQmEDTSQgaEJoFCAglbGDwNSsYpsLuZ0aO7jYIMC2sDgalZ2Wm0uPE6NHc8FZ9mbtU2AOq/6juI/wCMdhx8/RWGjQbTDWtAAvAADfgFBXdmYAUczZzHRzr3cNY5CZH7th2nhGuBa9oc0i4ImRyXQc+K1Zh4PkdQ4B0+rnDyKlXYCI5r5u9Xzvb6WJPCdPHd690nUprYaXU9X0pOZnMjmFUKdIut7V9fad8V7njMEQTB4qlbb3admdVptF7uA49QvbPK898SqYfDho0A7LNRo+1PFZ/CyiDr1WXDMC68nMynVYSyxcDwLSWn1F1pYPbGKo1qbfGfUY50FtX27QSbm/BdR5AC5dEZ6viD3WBzWnm7j6aeZXXHb255ZOu6u2F21SqOyGWPAFne6Z5H9VvlVHY2zKlcuyCM7oDj+Ecgrjgt2azBArn+VwBb8fotDKxkoW9U2TUbxaT5iey06lJzfeBHy9UCQkE0DQEgmqGE1GU0EghCAgEIQoOME0gmqJBNIJoGFJRCaCSELvbG3cdWa2q8ltMkxAlzosewtqg4TV08HsKvUuW+G3nUsfJuquuC2bSpAeGxojjAzdy43K220u/ogrmD3cpU4Lpqu/MIYP6ePmV3adPKAAI5AWt0jRZ3U4Nr/RLKUEmHhZZXagW0Ed1ipsIuOPCPqsjj5+Sg08ZgQ8+ILPAy/wAzdcp7Xjuea57hzXcq8xadZ/ditKs0O79dY6Lw5eDy9z60cXP4+r8cXF0+S42Nc+CAArRWpgA/NcupQaT7w15ErLeHc/TXnn47+1Prbt+KC4mHa9FX8bs2pRJEExxXqbAwDKJcegt6qNHCNBzZADrL4eR2m0r0xxcl+vPk5eOfPryynu5jK4BNN9KmdM1qjx0HAdT5c119n7n1SQwjw2NEQOA5d16fRpEwIInUn3j1WU0RECwnS3zWvOZGLW7q9uRsnZLMOwAAchYG66LW29Z6pvbmkDQRfks9Jummlyu3DWc29x8FB+FB14zwW7UEHSfjCxRzHHgg42J2S0zlEdRb4Ll4nAPbcDMOmvorW8du+qw1qMgk9+Cgp6Fl2g57iKjWsFEGMx954/EPy/NYgqppyhBQOUKMolBKUKEoQckKQUQpIJJhRTCCSaQQg3dm4J1eqyk3Vxufwt4u8gvU6GHbTY2m0Q1rQ0DoNFV9xMBlpvrkXqHLTJ/A3U+Z/wCqtDjJtykoMZZB5fJBAFr87o5qQGnLoEEKp8rfu6AZEgH1SxQgTpyTomANfRQSn4ozX4fvohxNjYR2j/JUcpPbXqgTn/5JWtiWEe6ZHAEFw/wtiemn7lJ1MGOfFBxMVVeLlrv6TY+Tv1WOiwOvmcIH3mC/qV3W0W05J16jRcnEYjxj4VJoj7z4sOg6oNdjAfdkn8sNHSdV0cPhQ2C4DNwNyR53hZMFgxT5HjcCPJZXkazI5cigg0cf8ofIEyTbj+ibm3kz0uJRWaIAvrfqiMVNsi3HWw15LLTtwEX14JmNDoNCbKFRvASgk0k8DJPM/sJAT1g6XSLrawdOUp0Da9uNwgwu1y6HiZ0C5m2XFzqeEZP+qS6qb2ot97XnZvmV0cAS4OqGIc45eAgWm64+w6vjVsXizGUO+zUSdMjLvI7uIH9JVBtWmILQBAEQIgDkFW8O6JYdWm3VvBWNzg8uI0n93Vd2i0sqh393UdUVlQhJA0JIQCEIQckKSiFJA1IKITlBIKdKmXODWiS4ho7mwWOV2t0qAfimE6MDqnmBA+JCD0DBYcU6bKbYim1rfQBTcfgecJFwETf1WN56Tx0BlETzz0QHaanhIWDEOOUkTpIHUX08kUKogmeJ187BBlxkewPNZGm1v0CxO94awI7BZQenmionn6dfii/mgayYj5KJvyPlf1UDpnW515QE3GL6DilTMT8NYWriHkW4/D04oNbETVdkaSGjjrZbeFptYMrREeUrDhqccBf1Ww0AQSCeWqAqVPXhE27qOmnHmsdy7nyv9Flc22tvNAPn9j4pVRcAnrKkw9gNYQ8XGlpugDGsz8gsZEameGt08vM/qk7tHPh/6iIVeAEdysO065bSIFi/2W8ZcbA9Vmk5unpC0cQ7xKzG/dacxvyFroMu0qgw+Dqv/wDlQe63RtlX8EDSwmFwTJ8V9MVKx1yZzme49ZcQuzvU4fZXMdGVz6VN9/uuqNa4ehK5my35g7EOEvrukcgwmKbR0iDHVUbD6YY2BOVoA6E6R1Vf2yyxPH4LtY7Ee34Tb+Feo46B+sdSuNtR2rek34WsgwYd8taekHyWRamAPscrraBRUkJBCBoSQg5QUghCBoQhAwVatxaXtVqnEBjB5kk/IIQgt7jH01WGqYAN+miaERqVMQD/AOcOKwYWqXljODfeH8pLT65fihCDrU6nmeJ4LKXdde6EIrFcyBfh0UXOFweyEKBuMdPiVqwHOPACRoCT3QhBsU2xM3A5rBiHgDhpyMoQgVEAc+y2INj3i6EIDMJjXuOKjeTJshCCJME2+QWNz+PK1tZ5oQiNWpXib+t/NYsFd+edZuhCo5P8QMbkwhP52HrZwcfkVHD4wU6IqH/awtGmDGtSsWiB/KLIQg08NOVpeb1KzfEP4nuIJHQcOwWhjqmeritABBAPSwQhBjwogAc2g/ErNKEIqYTQhAIQhB//2Q==', // Replace with your image URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Admin</Text>
      </View>

      {/* Notification and Cart Section */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon.Bell stroke='black' width={24} height={24} 
          onPress={()=>navigation.navigate('Notifications')} />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Icon.ShoppingCart stroke='black' width={24} height={24} 
          onPress={()=>navigation.navigate('Cart')} />
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
    // marginTop:15
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginLeft: 20,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
