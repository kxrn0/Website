for image in *.png ; 
do 
    convert "$image" "${image%.*}.jpg" ;
done

rm *.png
