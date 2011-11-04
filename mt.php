<?php
    // ����Header��������PNG�ļ�
    header('content-type: image/png');
    
    // ����ԴͼƬ��·��������
    $src = 'http://mapgoogle.mapabc.com/googlechina/maptile?v=w2.60&' . $_SERVER["QUERY_STRING"];
    $image = imagecreatefromgif($src);
    
    
    // ��Ҫ���������ɫ ����
    $removedcollors = array(
                            imagecolorexact($image, 152, 178, 203),
                            imagecolorexact($image, 241, 238, 232),
                            imagecolorexact($image, 232, 227, 216),
                            imagecolorexact($image, 235, 230, 220),
                            imagecolorexact($image, 242, 239, 233)
                           );
    
    // �趨͸��ɫ
    $transparent = imagecolorallocate($image, 100, 100, 100);
    
    // ��ȡͼƬ��С���Ա���������ɫ
    $x = imagesx($image);
    $y = imagesy($image);
    
    // �����ɫ
    for($i = 0; $i<$x; $i++)
    {
        for($j = 0; $j<$y; $j++)
        {
            $color = imagecolorat($image, $i, $j);
            if(in_array($color, $removedcollors))
            {
                imagesetpixel($image, $i, $j, $transparent);
            }
        }
    }
    
    // ����ͼƬ͸��
    imagecolortransparent($image, $transparent);
    
    // ���PNGͼƬ
    imagepng($image);
    
    // ����ͼƬ��Դ
    imagedestroy($image);
?>
